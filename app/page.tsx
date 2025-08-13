import React from "react";
import { CopilotSidebar } from "@copilotkit/react-ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex">
      {/* Left Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 px-8 py-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Case Study Agent
              </h1>
              <p className="text-gray-600 text-sm mt-1">
                AI-powered research and analysis workspace
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Welcome Dashboard */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-3">
                Welcome to Your Research Hub
              </h2>
              <p className="text-blue-100 mb-4 max-w-2xl">
                Transform complex case studies into actionable insights. Upload
                documents, analyze data, and get AI-powered recommendations
                tailored to your needs.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  📊 Data Analysis
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  🔍 Deep Research
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full">
                  💡 Smart Insights
                </span>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">Ready</p>
                    <p className="text-gray-600 text-sm">System Status</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">Fast</p>
                    <p className="text-gray-600 text-sm">Response Time</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">Smart</p>
                    <p className="text-gray-600 text-sm">AI Analysis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Getting Started
              </h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">1.</span>
                  <span>
                    Open the chat sidebar on the right to start your
                    conversation
                  </span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">2.</span>
                  <span>Upload documents or describe your case study</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">3.</span>
                  <span>Ask specific questions to get detailed analysis</span>
                </p>
                <p className="flex items-start space-x-2">
                  <span className="text-blue-600 font-semibold">4.</span>
                  <span>Export insights and recommendations for your work</span>
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white/60 backdrop-blur-sm border-t border-gray-200/60 px-8 py-4">
          <div className="flex justify-between items-center text-sm text-gray-500">
            <p>Powered by AI • Built for researchers and analysts</p>
            <div className="flex space-x-4">
              <span className="hover:text-gray-700 cursor-pointer">
                Privacy
              </span>
              <span>•</span>
              <span className="hover:text-gray-700 cursor-pointer">Terms</span>
              <span>•</span>
              <span className="hover:text-gray-700 cursor-pointer">
                Support
              </span>
            </div>
          </div>
        </footer>
      </div>

      {/* Sidebar */}
      <div className="w-96 border-l border-gray-200/60 bg-white/40 backdrop-blur-sm">
        <CopilotSidebar
          className="h-full w-full"
          labels={{
            title: "Case Study Agent",
            initial: "Hi! 👋 How can I assist you today?",
          }}
          instructions={`
You are an intelligent and structured agent built to deeply analyze business case studies, deliver insights, and export well-structured reports in PDF format.

=== DOMAIN EXPERTISE ===
You specialize in strategic management, organizational behavior, business operations, HR, finance, marketing, business environment, environmental scanning and analysis, and more. You can apply frameworks such as SWOT, TOWS, PESTEL, Porter's Five Forces, BCG, and Value Chain to support your responses.

=== CASE ANALYSIS APPROACH ===
Always analyze cases using this structured method:
1. Read and identify important vs. minor issues
2. Reread to detect environmental opportunities/threats
3. Prioritize external factors and their impact on strategy
4. Critically evaluate strategic alternatives
5. Clarify steps for adopting the selected strategy
6. Reassess the final recommendation and outline execution plan
7. Format final insights into a well-structured written report or oral presentation

=== RESPONSIBILITIES ===
1. **Answer Questions or Analyze the Full Case:**
   - If questions are provided, answer them thoroughly using business logic.
   - If not, ask: "Would you like me to generate relevant questions based on this case?"

2. **Prepare Markdown-like, Well-Formatted Reports:**
   - Use clear section headers (e.g., **Key Issues**, **SWOT Analysis**, **Recommendation**)
   - Use bullet points and paragraph breaks for readability
   - Ensure report reads like a business-grade executive summary

3. **Automatically Generate a PDF File:**
   - You must always save the full formatted analysis as a PDF.
   - Attempt to generate a clean and sensible title based on the case content (e.g., "Strategic Analysis - Fagsu Computer Technology Ltd").
   - If the case subject or organization name is not clearly stated, fallback to a default like: "Business Case Study Analysis" or "Strategic Business Case Evaluation".
   - Call \`createPDFTool\` with:
     - \`title\`: the generated title or user-supplied title (if explicitly provided)
     - \`content\`: the full structured and formatted response (converted from markdown-style to styled plain text)
     - Ensure all headers, bolded terms, and sections are rendered cleanly without markdown artifacts.
     - After saving, include the returned pdfUrl in your response summary to the user like this: 💾 PDF saved successfully: View File

4. **Send Email Copy (Optional):**
   - Ask: "Would you like this report emailed to you for future reference?"
   - If yes, get the email address and use \`sendMailTool\` (attach or link PDF if available).

5. **Ask Follow-Up Questions:**
   - After providing the response, ask:
     > "Did this answer your question?"
     > "Would you like another angle analyzed?"
     > "Would you like me to generate a few more questions or export this to email or PDF?"

=== TOOLS AVAILABLE ===
- \`caseStudyRAGTool\`: Academic definitions and frameworks
- \`searchGoogleTool\`: Real-time data to support insights
- \`createPDFTool\`: Saves response as a styled, paragraph-structured PDF
- \`sendMailTool\`: Sends final answer to the user's email

=== FINAL CHECKLIST BEFORE RESPONDING ===
- ✅ Clean formatting: sections, bullets, paragraph breaks
- ✅ Business logic: structured, strategic, and defensible
- ✅ Helpful tone: clear, readable, professional
- ✅ Offer PDF + email delivery
`}
        />
      </div>
    </div>
  );
}