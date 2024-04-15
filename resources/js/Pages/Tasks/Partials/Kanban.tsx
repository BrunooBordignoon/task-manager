import { cn } from "@/lib/utils";

const kanbanStatusBoard = [
    { title: "Pendentes", color: "text-yellow-600" },
    { title: "Em andamento", color: "text-blue-600" },
    { title: "Concluídos", color: "text-emerald-600" },
    { title: "Cancelados", color: "text-red-600" },
];

export default function Kanban() {
    return (
        <div className="flex justify-between gap-2">
            {kanbanStatusBoard.map(({ title, color }, index) => (
                <div className="flex flex-col flex-1">
                    <div
                        key={index}
                        className={cn(
                            "rounded-t flex-1 p-2 bg-zinc-900 font-semibold border-b border-zinc-100 dark:border-zinc-700",
                            color
                        )}
                    >
                        {title}
                    </div>
                    <div className="rounded-b flex-1 p-2 bg-zinc-900 text-sm text-zinc-600 dark:text-zinc-400">
                        Nenhuma tarefa encontrada.
                    </div>
                </div>
            ))}
        </div>
    );
}
