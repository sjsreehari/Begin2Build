
import { Code, Calculator, DollarSign, Clock, Grid3X3, Hand, FileText, BookOpen, Music, Video, Palette, Receipt } from 'lucide-react';

const ProjectList = () => {
  const projects = [
    { name: 'Todo List', icon: FileText, description: 'Organize your tasks effectively' },
    { name: 'Calculator', icon: Calculator, description: 'Build a functional calculator' },
    { name: 'Currency Converter', icon: DollarSign, description: 'Convert between currencies' },
    { name: 'Stopwatch', icon: Clock, description: 'Time tracking application' },
    { name: 'Tic Tac Toe', icon: Grid3X3, description: 'Classic game implementation' },
    { name: 'Rock Paper Scissors', icon: Hand, description: 'Interactive game with computer' },
    { name: 'Landing Page with Form', icon: Code, description: 'Professional landing page' },
    { name: 'Recipe Book', icon: BookOpen, description: 'Organize your favorite recipes' },
    { name: 'Music Player', icon: Music, description: 'Audio playback interface' },
    { name: 'Video Player', icon: Video, description: 'Custom video player controls' },
    { name: 'Color Picker Tool', icon: Palette, description: 'Interactive color selection' },
    { name: 'Tip Calculator', icon: Receipt, description: 'Calculate tips and split bills' }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-cream text-center mb-4">💡 Project Suggestions</h2>
        <p className="text-cream/80 text-center mb-12 max-w-2xl mx-auto">
          Choose from these exciting project ideas to build your coding skills. Each project is designed to teach you practical development concepts.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.name}
                className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 hover:border-cream/20 hover:scale-105 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-cream/10 rounded-xl group-hover:bg-cream/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-cream group-hover:text-cream-dark transition-colors duration-300" />
                  </div>
                  <h3 className="font-semibold text-cream group-hover:text-cream-dark transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-sm text-cream/70 group-hover:text-cream/90 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 text-center">
          <p className="text-lg text-cream mb-2">✨ Feel free to create a project of your own choice too!</p>
          <p className="text-cream/70 text-sm">
            The best learning happens when you're passionate about what you're building.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
