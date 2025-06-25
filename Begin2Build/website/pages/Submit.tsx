import React from "react";
import ProjectForm from "../components/ProjectForm";
import { Rocket } from 'lucide-react';

const Submit = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cream/10 rounded-2xl mb-6">
            <Rocket className="w-8 h-8 text-cream" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-6">
            🚀 Submit Your Final Project
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto leading-relaxed">
            Congratulations on completing your project! We can't wait to see what you've built. 
            Share your work with our community and inspire other learners.
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <ProjectForm />
        </div>

        {/* Tips Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-cream mb-6 text-center">💡 Submission Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-cream">Repository Link</h3>
                <ul className="text-cream/80 text-sm space-y-1">
                  <li>• Make sure your code is well-commented</li>
                  <li>• Include a detailed README.md file</li>
                  <li>• Add screenshots of your project</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-cream">Hosted Link</h3>
                <ul className="text-cream/80 text-sm space-y-1">
                  <li>• Use platforms like Vercel, Netlify, or GitHub Pages</li>
                  <li>• Ensure your project loads properly</li>
                  <li>• Test on different devices and browsers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submit;
