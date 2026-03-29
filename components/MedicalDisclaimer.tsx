import { AlertTriangle } from "lucide-react";

/**
 * Legal medical disclaimer - add to every page with medical content.
 * Server component, no client overhead.
 */
export function MedicalDisclaimer() {
  return (
    <div
      dir="rtl"
      lang="he"
      className="mx-auto max-w-4xl px-4 py-6"
      role="note"
      aria-label="הצהרת אחריות רפואית"
    >
      <div className="rounded-xl border border-gray-200 bg-gray-50 px-5 py-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-400" />
          <p className="text-xs leading-6 text-gray-500">
            <strong className="font-semibold text-gray-600">הצהרת אחריות: </strong>
            המידע באתר זה מיועד להעשרה בלבד ואינו מהווה ייעוץ רפואי, אבחון או המלצה לטיפול.
            אין לפעול על פי מידע זה ללא התייעצות עם רופא מוסמך.
            בכל מקרה חירום רפואי יש לפנות למוקד 101 (מד&quot;א) או לחדר מיון.
            ד&quot;ר אנה ברמלי והאתר אינם אחראים לכל נזק שייגרם משימוש במידע המופיע באתר.
          </p>
        </div>
      </div>
    </div>
  );
}
