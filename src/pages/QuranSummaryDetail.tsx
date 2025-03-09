import React from "react";
import { useParams, Link } from "react-router-dom";
import { quranJuzSummaries } from "../data/Quran";
import { ArrowLeft, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

const QuranSummaryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const juzId = parseInt(id || "1");

  const juz = quranJuzSummaries.find((j) => j.id === juzId);
  const prevJuz = juzId > 1 ? juzId - 1 : null;
  const nextJuz = juzId < 30 ? juzId + 1 : null;

  if (!juz) {
    return (
      <>
        <div className="min-h-screen py-12 px-4 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-emerald-900 mb-4">
            Juz Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The Juz you're looking for doesn't exist.
          </p>
          <Link
            to="/quran-summary"
            className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Quran Summary
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-screen py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <Link
            to="/quran-summary"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Quran Summary
          </Link>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Header Section */}
            <div className="bg-emerald-800 py-6 px-6 text-white">
              <h1 className="text-3xl font-bold mb-2">
                Juz {juz.id}: {juz.title}
              </h1>
              <p className="text-2xl font-['Amiri'] text-amber-300">
                {juz.arabicTitle}
              </p>
              <p className="text-emerald-100 mt-2">{juz.verses}</p>
            </div>

            {/* Responsive Layout */}
            <div className="p-6 md:p-8 bg-white border-t-4 border-amber-300">
              <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8">
                {/* Left Side (3/5) - Detailed Summary */}
                <div>
                  <h2 className="text-2xl font-semibold text-emerald-900 mb-4">
                    Summary
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {juz.summary.map((section, index) => (
                      <div
                        key={index}
                        className="bg-white shadow-md shadow-emerald-700 rounded-lg p-4 border border-gray-200"
                      >
                        <h3 className="text-lg font-bold text-emerald-800 mb-2">
                          {section.verses} - {section.title}
                        </h3>
                        <p className="text-gray-700">{section.description}</p>
                        <ul className="list-disc pl-5 text-emerald-700 mt-2">
                          {section.lesson.map((lesson, idx) => (
                            <li key={idx}>{lesson}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side (2/5) - Important Verses */}
                <div>
                  <h2 className="text-2xl font-semibold text-amber-900 mb-4">
                    Important Verses
                  </h2>
                  <div className="space-y-6">
                    {Object.entries(juz.importantVerses).map(
                      ([key, verse], index) => (
                        <div
                          key={index}
                          className="bg-amber-50 shadow-md shadow-amber-600 rounded-lg p-4 border border-amber-300"
                        >
                          <h3 className="text-lg font-bold text-amber-800 mb-2">
                            {verse.start} {verse.end ? `- ${verse.end}` : ""}
                          </h3>
                          <p className="text-gray-900 font-indopak text-xl">
                            {verse.arabic}
                          </p>
                          <p className="text-gray-600 italic mt-2">
                            {verse.englishTransliteration}
                          </p>
                          <p className="text-gray-700 mt-2">
                            {verse.englishTranslation}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation between Juz */}
          <div className="flex justify-between mt-8">
            {prevJuz ? (
              <Link
                to={`/quran-summary/${prevJuz}`}
                className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous Juz
              </Link>
            ) : (
              <div></div>
            )}

            {nextJuz ? (
              <Link
                to={`/quran-summary/${nextJuz}`}
                className="inline-flex items-center px-4 py-2 bg-emerald-700 text-white rounded-md hover:bg-emerald-800"
              >
                Next Juz
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuranSummaryDetail;
