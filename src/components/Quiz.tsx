import React, { useState } from "react";
import { CheckCircle2, XCircle, HelpCircle, RotateCcw } from "lucide-react";

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface QuizProps {
  title?: string;
  questions: Question[];
}

export const Quiz: React.FC<QuizProps> = ({
  title = "Evaluación de Arquitectura",
  questions,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!questions || questions.length === 0) return null;

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const score = questions.reduce((acc, q) => {
    return selectedAnswers[q.id] === q.correctIndex ? acc + 1 : acc;
  }, 0);

  const handleReset = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="my-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm not-prose">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 m-0">
          <HelpCircle className="w-5 h-5 text-indigo-600" />
          {title}
        </h3>
        {isSubmitted && (
          <span className="text-sm font-semibold px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full">
            {score} de {questions.length} correctas
          </span>
        )}
      </div>

      <div className="space-y-6">
        {questions.map((q, idx) => {
          const selected = selectedAnswers[q.id];
          const isCorrect = selected === q.correctIndex;

          return (
            <div
              key={q.id}
              className="p-4 rounded-xl border border-slate-100 bg-slate-50/50"
            >
              <p className="font-semibold text-slate-800 text-sm mb-3">
                {idx + 1}. {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  let btnClass =
                    "border-slate-200 bg-white text-slate-700 hover:border-indigo-300";

                  if (selected === optIdx) {
                    btnClass =
                      "border-indigo-600 bg-indigo-50 text-indigo-900 font-medium";
                  }

                  if (isSubmitted) {
                    if (optIdx === q.correctIndex) {
                      btnClass =
                        "border-emerald-500 bg-emerald-50 text-emerald-900 font-medium";
                    } else if (selected === optIdx && !isCorrect) {
                      btnClass =
                        "border-red-500 bg-red-50 text-red-900 font-medium";
                    } else {
                      btnClass =
                        "border-slate-200 bg-slate-50 text-slate-400 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      disabled={isSubmitted}
                      onClick={() => handleSelect(q.id, optIdx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-lg border text-sm transition-all flex items-center justify-between ${btnClass}`}
                    >
                      <span>{opt}</span>
                      {isSubmitted && optIdx === q.correctIndex && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                      )}
                      {isSubmitted && selected === optIdx && !isCorrect && (
                        <XCircle className="w-4 h-4 text-red-600 shrink-0 ml-2" />
                      )}
                    </button>
                  );
                })}
              </div>

              {isSubmitted && (
                <div className="mt-3 p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-600">
                  <span className="font-bold text-slate-800">
                    Feedback de Arquitectura:{" "}
                  </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
        {isSubmitted ? (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reintentar Evaluación
          </button>
        ) : (
          <button
            type="button"
            disabled={Object.keys(selectedAnswers).length === 0}
            onClick={() => setIsSubmitted(true)}
            className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-colors"
          >
            Verificar Respuestas
          </button>
        )}
      </div>
    </div>
  );
};
