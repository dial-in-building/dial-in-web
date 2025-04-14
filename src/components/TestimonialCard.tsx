
interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, position, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col h-full">
        <div className="mb-4 text-dialin-gold">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.223.315-.598.795-1.148 1.436-1.65.354-.27.94-.45 1.756-.54v-2.573c-1.716.35-3.045.897-3.986 1.647-1.01.8-1.694 1.753-2.05 2.86-.314.998-.38 2.08-.192 3.25.326 2.036 1.576 3.312 3.75 3.83.783.18 1.648.128 2.595-.153.75-.232 1.33-.608 1.732-1.128.41-.526.615-1.142.615-1.85zm9.65 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.822-.56-.128-1.07-.136-1.54-.027-.16-.95.09-1.626.41-2.223.317-.598.795-1.148 1.437-1.65.356-.27.94-.45 1.756-.54v-2.573c-1.716.35-3.045.897-3.986 1.647-1.01.8-1.694 1.753-2.05 2.86-.314.998-.38 2.08-.192 3.25.326 2.036 1.576 3.312 3.75 3.83.783.18 1.648.128 2.595-.153.75-.232 1.33-.608 1.732-1.128.41-.526.615-1.142.615-1.85z" /></svg>
        </div>
        <p className="text-gray-600 flex-grow">{quote}</p>
        <div className="mt-6 flex items-center">
          {image && (
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
          )}
          <div>
            <p className="font-bold text-dialin-brown">{author}</p>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
