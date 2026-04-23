import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

import { photographerInfo } from '@/data/photographer';
import { projects } from '@/data/projects';

// Validation schema with security best practices
const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Informe ao menos 2 caracteres' })
    .max(100, { message: 'Nome muito longo' }),
  email: z
    .string()
    .trim()
    .email({ message: 'E-mail inválido' })
    .max(255, { message: 'E-mail muito longo' }),
  phone: z
    .string()
    .trim()
    .min(8, { message: 'Telefone inválido' })
    .max(20, { message: 'Telefone muito longo' }),
  modalidade: z.string().min(1, { message: 'Selecione uma modalidade' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Conte um pouco mais (mín. 10 caracteres)' })
    .max(1000, { message: 'Mensagem muito longa' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

/**
 * Formulário de contato com validação.
 * Por enquanto, abre o WhatsApp do consultor com a mensagem pré-formatada.
 * Conecte ao Lovable Cloud (e-mail/Edge Function) quando desejar envio automático.
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      modalidade: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const text =
        `Olá! Me chamo ${data.name} e tenho interesse em uma carta de crédito.\n\n` +
        `• Modalidade: ${data.modalidade}\n` +
        `• E-mail: ${data.email}\n` +
        `• Telefone: ${data.phone}\n\n` +
        `Mensagem: ${data.message}`;
      const url = `https://wa.me/${photographerInfo.whatsapp}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');

      setIsSuccess(true);
      form.reset();
      setTimeout(() => setIsSuccess(false), 6000);
    } catch (error) {
      form.setError('root', {
        message: 'Não foi possível enviar a mensagem. Tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show success message
  if (isSuccess) {
    return (
      <motion.div
        className="bg-accent border border-border rounded-sm p-8 text-center space-y-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <CheckCircle2 className="size-16 mx-auto text-accent-foreground" />
        </motion.div>
        <h3 className="font-serif text-2xl tracking-wide text-accent-foreground">Mensagem encaminhada!</h3>
        <p className="text-accent-foreground/80 font-light leading-relaxed">
          Abrimos o WhatsApp com sua mensagem pronta. Te respondo o mais rápido possível.
        </p>
      </motion.div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">
                Nome completo
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Seu nome"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">
                E-mail
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Phone Field */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Telefone / WhatsApp</FormLabel>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="(11) 99999-9999"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Modalidade Select */}
        <FormField
          control={form.control}
          name="modalidade"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">Modalidade de interesse</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger className="font-light">
                    <SelectValue placeholder="Selecione uma modalidade" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-popover z-50">
                  {projects.map((m) => (
                    <SelectItem key={m.id} value={m.title} className="font-light">
                      {m.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Message Textarea */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-light tracking-wide">
                Mensagem
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Conte um pouco sobre o seu objetivo..."
                  className="min-h-32 font-light resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-xs font-light" />
            </FormItem>
          )}
        />

        {/* Root Error Message */}
        {form.formState.errors.root && (
          <div className="text-sm text-destructive font-light">
            {form.formState.errors.root.message}
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full py-6 text-base font-medium tracking-wide bg-accent text-accent-foreground hover:opacity-90 rounded-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 size-5 animate-spin" />
              Enviando...
            </>
          ) : (
            'Enviar mensagem'
          )}
        </Button>
      </form>
    </Form>
  );
}
