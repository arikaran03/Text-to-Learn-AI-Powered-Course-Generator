import HeadingBlock from './blocks/HeadingBlock';
import ParagraphBlock from './blocks/ParagraphBlock';
import CodeBlock from './blocks/CodeBlock';
import VideoBlock from './blocks/VideoBlock';
import MCQBlock from './blocks/MCQBlock';

const LessonRenderer = ({ content }) => {
  const renderBlock = (block, index) => {
    switch (block.type) {
      case 'heading':
        return <HeadingBlock key={index} {...block} />;
      case 'paragraph':
        return <ParagraphBlock key={index} {...block} />;
      case 'code':
        return <CodeBlock key={index} {...block} />;
      case 'video':
        return <VideoBlock key={index} {...block} />;
      case 'mcq':
        return <MCQBlock key={index} {...block} />;
      default:
        return <div key={index} className="text-red-500">Unsupported block type: {block.type}</div>;
    }
  };

  return <div className="w-full max-w-3xl mx-auto py-8">{content.map(renderBlock)}</div>;
};

export default LessonRenderer;