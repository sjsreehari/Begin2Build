import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProjectList from '@/components/ProjectList';
import { ArrowRight, Code2, Users, Trophy, Target, Sprout, Globe } from 'lucide-react';

const Home = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/f5b460f3-d124-41b5-879e-66d13b173a25.png" 
              alt="Begin2Build Logo" 
              className="h-32 w-auto mx-auto mb-8 hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-cream mb-6 animate-fade-in leading-tight">
            Welcome to <span className="bg-gradient-to-r from-cream to-cream-dark bg-clip-text text-transparent">Begin2Build</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            An initiative to help students build confidence in coding by completing small but meaningful web projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button 
              onClick={scrollToProjects}
              className="bg-cream text-charcoal hover:bg-cream-dark transition-all duration-300 font-semibold px-8 py-3 text-lg hover:scale-105"
            >
              Explore Projects
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link to="/submit">
              <Button className="bg-cream text-charcoal hover:bg-cream-dark transition-all duration-300 font-semibold px-8 py-3 text-lg hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto block text-center flex items-center justify-center">
                <span className="w-full text-center block">Submit Project</span>
              </Button>
            </Link>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 transition-all duration-300">
              <Code2 className="w-8 h-8 text-cream mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-cream mb-2">12+</h3>
              <p className="text-cream/70">Project Ideas</p>
            </div>
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 transition-all duration-300">
              <Users className="w-8 h-8 text-cream mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-cream mb-2">Growing</h3>
              <p className="text-cream/70">Community</p>
            </div>
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 hover:bg-cream/10 transition-all duration-300">
              <Trophy className="w-8 h-8 text-cream mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-cream mb-2">Practical</h3>
              <p className="text-cream/70">Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-charcoal to-charcoal/90">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-cream text-center mb-8">
              🌟 About Begin2Build
            </h2>
            
            <div className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-8 md:p-12 mb-12">
              <p className="text-lg md:text-xl text-cream/90 leading-relaxed mb-8 text-center">
                Begin2Build is an initiative designed to empower students to take their first confident steps in web development. 
                It provides a supportive environment where learners can apply the concepts they've studied by building small, meaningful projects.
              </p>
              
              <p className="text-lg text-cream/80 leading-relaxed text-center mb-8">
                Whether you're new to coding or looking to strengthen your frontend skills, Begin2Build encourages hands-on practice 
                through guided project suggestions — and the freedom to innovate with your own ideas.
              </p>

              <h3 className="text-2xl md:text-3xl font-bold text-cream text-center mb-8">
                🔹 What makes Begin2Build special?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-cream/5 border border-cream/10 rounded-xl p-6 text-center hover:bg-cream/10 transition-all duration-300">
                  <Target className="w-8 h-8 text-cream mx-auto mb-4" />
                  <h4 className="font-bold text-cream mb-3">🚀 Learn by doing</h4>
                  <p className="text-cream/70 text-sm">Move beyond theory by building real projects</p>
                </div>
                
                <div className="bg-cream/5 border border-cream/10 rounded-xl p-6 text-center hover:bg-cream/10 transition-all duration-300">
                  <Code2 className="w-8 h-8 text-cream mx-auto mb-4" />
                  <h4 className="font-bold text-cream mb-3">🎯 Starter-friendly</h4>
                  <p className="text-cream/70 text-sm">Project ideas to help you kick off</p>
                </div>
                
                <div className="bg-cream/5 border border-cream/10 rounded-xl p-6 text-center hover:bg-cream/10 transition-all duration-300">
                  <Sprout className="w-8 h-8 text-cream mx-auto mb-4" />
                  <h4 className="font-bold text-cream mb-3">🌱 Open-ended creativity</h4>
                  <p className="text-cream/70 text-sm">Bring your own project concepts to life</p>
                </div>
                
                <div className="bg-cream/5 border border-cream/10 rounded-xl p-6 text-center hover:bg-cream/10 transition-all duration-300">
                  <Globe className="w-8 h-8 text-cream mx-auto mb-4" />
                  <h4 className="font-bold text-cream mb-3">🌐 Modern tools</h4>
                  <p className="text-cream/70 text-sm">Practice with HTML, CSS, JavaScript & more</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cream/10 to-cream/5 border border-cream/20 rounded-xl p-6 mt-8">
                <p className="text-lg text-cream text-center leading-relaxed">
                  At Begin2Build, every project submission is a step towards mastering coding, problem-solving, and showcasing your work confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects">
        <ProjectList />
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-cream/10 to-cream/5 backdrop-blur-sm border border-cream/20 rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-cream mb-6">
              Ready to Start Building?
            </h2>
            <p className="text-cream/80 text-lg mb-8 max-w-2xl mx-auto">
              Choose a project that excites you, start coding, and share your amazing work with our community!
            </p>
            <Link to="/submit">
              <Button className="bg-cream text-charcoal hover:bg-cream-dark transition-all duration-300 font-semibold px-8 py-3 text-lg hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto block text-center flex items-center justify-center">
                <span className="w-full text-center block">Submit Project</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
