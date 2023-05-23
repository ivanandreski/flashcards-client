import React from "react";
import StudentGradesDB from "../../MockDB/StudentGradesDB";

const StudentGrades = () => {
  return (
    <div className="mx-auto w-4/6">
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                #
              </th>
              <th scope="col" class="px-6 py-3">
                Student
              </th>
              <th scope="col" class="px-6 py-3">
                Completed Flashcards
              </th>
              <th scope="col" class="px-6 py-3">
                Average Score
              </th>
            </tr>
          </thead>
          <tbody>
            {StudentGradesDB.Students.map((student, i) => {
              return (
                <tr
                  key={i}
                  class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {i + 1}
                  </th>
                  <td class="px-6 py-4">{student.name}</td>
                  <td class="px-6 py-4">{student.completedFlashcards}</td>
                  <td class="px-6 py-4">{student.avgScore}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentGrades;
