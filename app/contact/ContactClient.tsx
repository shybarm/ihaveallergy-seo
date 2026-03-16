"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Phone,
    title: "טלפון",
    value: "054-580-8008",
    href: "tel:0545808008",
  },
  {
    icon: Mail,
    title: "דוא״ל",
    value: "info@drbrameli.co.il",
    href: "mailto:info@drbrameli.co.il",
  },
  {
    icon: MapPin,
    title: "כתובת",
    value: "טבס 3, הוד השרון",
    href: "https://maps.google.com/?q=טבס+3+הוד+השרון",
  },
];

const hours = [
  { days: "ראשון - חמישי", time: "08:00 - 19:00" },
  { days: "שישי", time: "08:00 - 13:00" },
  { days: "שבת", time: "סגור" },
];

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <section className="gradient-hero py-20 md:py-28" dir="rtl">
        <div className="container-medical">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 font-bold text-foreground">
              יצירת קשר וקביעת תור
            </h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              נשמח לעזור — פנו אלינו לקביעת תור לאבחון מקצועי או לכל שאלה. אנו
              מתחייבים לחזור אליכם בהקדם האפשרי.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing-lg" dir="rtl">
        <div className="container-medical">
          <div className="grid gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-9">
                <h2 className="mb-7 text-2xl font-bold text-foreground">
                  טופס פנייה
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-14 text-center"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-foreground">
                      הפנייה נשלחה בהצלחה!
                    </h3>
                    <p className="mb-6 text-muted-foreground">
                      נחזור אליכם בהקדם האפשרי לתיאום התור.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      שלח פנייה נוספת
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">שם מלא *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="הזינו את שמכם"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">טלפון *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="050-0000000"
                          dir="ltr"
                          className="h-12 text-right"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">דוא״ל</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        dir="ltr"
                        className="h-12 text-right"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">נושא הפנייה *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="לדוגמה: קביעת תור לאבחון אלרגיה"
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">פרטים נוספים</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="ספרו לנו על התסמינים או הסיבה לפנייה..."
                        rows={4}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                          שולח...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          שלח פנייה
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
            >
              <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-9">
                <h2 className="mb-7 text-2xl font-bold text-foreground">
                  פרטי התקשרות
                </h2>

                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target={item.icon === MapPin ? "_blank" : undefined}
                      rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-4"
                    >
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.title}</p>
                        <p className="font-medium text-foreground transition-colors group-hover:text-primary">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-border/60 bg-card p-7 md:p-9">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    שעות פעילות
                  </h2>
                </div>

                <div className="space-y-4">
                  {hours.map((item) => (
                    <div
                      key={item.days}
                      className="flex items-center justify-between border-b border-border/60 py-3 last:border-b-0"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.days}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-64 overflow-hidden rounded-2xl border border-border/60 bg-surface">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.8!2d34.8947!3d32.1524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z15jXkdehIDMsINeU15XXkyDXlNep16jXldefLCDXmdep16jXkNec!5e0!3m2!1she!2sil!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="מרפאת אלרגיה — ד״ר אנה ברמלי, טבס 3, הוד השרון"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
