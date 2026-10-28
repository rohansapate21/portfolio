import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { FadeIn } from '@/components/ui/FadeIn'
import { siteConfig } from '@/content/data'
import { Mail, Send, CheckCircle2, AlertCircle, Phone, MessageSquare } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Max 1000 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  })

  const messageValue = watch('message') || ''

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    setErrorMessage('')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || serviceId === 'your_service_id' || serviceId === 'service_xxxxxxx') {
      // Graceful fallback for mock/demo mode
      setTimeout(() => {
        setStatus('success')
        reset()
      }, 1000)
      return
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        publicKey
      )
      setStatus('success')
      reset()
    } catch (err: any) {
      setStatus('error')
      setErrorMessage(err?.text || 'Failed to send message. Please try again or reach out directly.')
    }
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="section-container">
        <SectionHeader
          label="Get In Touch"
          title={
            <>
              Let's Build Something <span className="gradient-text">Great</span>
            </>
          }
          subtitle="Whether you have an open opportunity, project idea, or just want to chat about AI/ML — my inbox is open."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Details */}
          <FadeIn className="lg:col-span-5 glass-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Contact Details</h3>
              <p className="text-xs text-text-secondary leading-relaxed mb-6">
                Feel free to email me directly or schedule a virtual meet. I usually reply within 24 hours.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-2/60 border border-border hover:border-primary/40 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail size={16} />
                  </span>
                  <div>
                    <div className="text-[11px] text-text-muted">Direct Email</div>
                    <div className="text-xs font-semibold text-text-primary">{siteConfig.email}</div>
                  </div>
                </a>

                <a
                  href="tel:+919370951272"
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-2/60 border border-border hover:border-accent-green/40 transition-colors"
                >
                  <span className="p-2 rounded-lg bg-accent-green/10 text-accent-green">
                    <Phone size={16} />
                  </span>
                  <div>
                    <div className="text-[11px] text-text-muted">Call</div>
                    <div className="text-xs font-semibold text-text-primary">+91 9370951272</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-2/60 border border-border">
                  <span className="p-2 rounded-lg bg-secondary/10 text-secondary">
                    <MessageSquare size={16} />
                  </span>
                  <div>
                    <div className="text-[11px] text-text-muted">Location</div>
                    <div className="text-xs font-semibold text-text-primary">Pune, Maharashtra, India</div>
                  </div>
                </div>
              </div>
            </div>

            
          </FadeIn>

          {/* Right Form */}
          <FadeIn delay={0.1} className="lg:col-span-7 glass-card p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="form-group">
                  <input
                    {...register('name')}
                    type="text"
                    placeholder=" "
                    className="form-input w-full px-4 pb-2.5 pt-6 bg-surface-2 rounded-xl border border-border text-xs text-text-primary focus:border-primary focus:outline-none"
                  />
                  <label className="form-label">Your Name</label>
                  {errors.name && (
                    <span className="text-[11px] text-accent-pink mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="form-group">
                  <input
                    {...register('email')}
                    type="email"
                    placeholder=" "
                    className="form-input w-full px-4 pb-2.5 pt-6 bg-surface-2 rounded-xl border border-border text-xs text-text-primary focus:border-primary focus:outline-none"
                  />
                  <label className="form-label">Your Email</label>
                  {errors.email && (
                    <span className="text-[11px] text-accent-pink mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="form-group">
                <input
                  {...register('subject')}
                  type="text"
                  placeholder=" "
                  className="form-input w-full px-4 pb-2.5 pt-6 bg-surface-2 rounded-xl border border-border text-xs text-text-primary focus:border-primary focus:outline-none"
                />
                <label className="form-label">Subject</label>
                {errors.subject && (
                  <span className="text-[11px] text-accent-pink mt-1 block">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="form-group">
                <textarea
                  {...register('message')}
                  rows={4}
                  placeholder=" "
                  className="form-input w-full px-4 pb-2.5 pt-6 bg-surface-2 rounded-xl border border-border text-xs text-text-primary focus:border-primary focus:outline-none resize-none"
                />
                <label className="form-label">Your Message</label>
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? (
                    <span className="text-[11px] text-accent-pink">
                      {errors.message.message}
                    </span>
                  ) : <span />}
                  <span className="text-[10px] text-text-muted font-mono ml-auto">
                    {messageValue.length}/1000
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center !py-3"
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Notifications */}
              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-accent-green/10 border border-accent-green/30 text-accent-green text-xs">
                  <CheckCircle2 size={16} />
                  <span>Message delivered successfully! I will get back to you shortly.</span>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg bg-accent-pink/10 border border-accent-pink/30 text-accent-pink text-xs">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
