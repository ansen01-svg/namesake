import { PageHeader } from "@/components/app";
import { Badge, Link } from "@/components/common";
import { api } from "@convex/_generated/api";
import type { Id } from "@convex/_generated/dataModel";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "convex/react";

export const Route = createFileRoute("/_authenticated/admin/forms/$formId")({
  component: AdminFormDetailRoute,
});

function AdminFormDetailRoute() {
  const { formId } = Route.useParams();
  const form = useQuery(api.forms.getById, {
    formId: formId as Id<"forms">,
  });
  const fileUrl = useQuery(api.forms.getURL, {
    formId: formId as Id<"forms">,
  });

  if (form === undefined) return;
  if (form === null) return "Form not found";

  return (
    <div>
      <PageHeader
        title={form.title}
        badge={
          <>
            <Badge size="lg">{form.jurisdiction}</Badge>
            <Badge size="lg">{form.formCode}</Badge>
          </>
        }
      >
        <Link
          href={{
            to: "/admin/quests/$questId",
            params: { questId: form.questId },
          }}
          button={{ variant: "secondary" }}
        >
          Go to quest
        </Link>
      </PageHeader>
      {fileUrl && (
        <object
          className="w-full aspect-square max-h-full rounded-lg"
          data={fileUrl}
          title={form.title}
        />
      )}
    </div>
  );
}
