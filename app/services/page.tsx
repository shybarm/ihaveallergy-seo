import type { Metadata } from "next";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "שירותים ומצבים רפואיים | ד״ר אנה ברמלי – מרפאת אלרגיה",
  description:
    "ייעוץ אלרגיה ושירותי אבחון וטיפול: אלרגיה למזון, נזלת אלרגית, אימונותרפיה, אלרגיה לחיות מחמד, לאבק, לתרופות, אסתמה ואורטיקריה.",
  alternates: {
    canonical: "https://seo.ihaveallergy.com/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />

      <section className="section-spacing-lg bg-surface-warm">
        <div className="container-medical">
          <div className="text-center">
            <h2 className="font-bold text-foreground mb-4">
              מתי כדאי להיבדק?
            </h2>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              כאשר יש תגובות חוזרות: פריחה, שיעול, נפיחות או בעיות נשימה לאחר
              חשיפה למזון, תרופה, עקיצה או אבקנים.
            </p>

            <Button size="lg" asChild>
              <Link href="/contact">
                <Phone className="w-5 h-5 ml-2" />
                קביעת תור לאבחון
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
