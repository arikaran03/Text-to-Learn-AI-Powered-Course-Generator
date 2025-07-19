import LessonRenderer from '../components/LessonRenderer';

function LessonPage() {
  // This static data will eventually be fetched from your API for a specific lesson.
  const lessonContent = [
    { "type": "heading", "text": "Introduction to AI" },
    { "type": "paragraph", "text": "Artificial intelligence (AI) is a rapidly evolving field of computer science that involves creating machines and systems that can perform tasks that typically require human intelligence. This includes learning, reasoning, problem-solving, perception, and language understanding." },
    { "type": "video", "url": "https://www.youtube.com/embed/ad79nYk2keg" },
    { "type": "paragraph", "text": "Let's look at a simple example in Python." },
    { "type": "code", "language": "python", "text": "def greet(name):\n  print(f'Hello, {name}!')\n\ngreet('AI Enthusiast')" },
    { "type": "heading", "text": "Test Your Knowledge" },
    { "type": "mcq", "question": "What is the primary goal of AI?", "options": ["To build conscious robots", "To simulate human intelligence in machines", "To replace all human jobs"], "answer": 1 }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto px-4">
        <LessonRenderer content={lessonContent} />
      </div>
    </div>
  );
}

export default LessonPage;