import { useParams, Link } from 'react-router-dom';

const Newsletter = () => {
  const { type } = useParams();

  return (
    <div className="min-h-screen bg-light-pink">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Newsletter {type === 'semanal' ? 'Semanal' : 'Mensal'}
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-600 mb-6">
              Esta página será desenvolvida em breve com o conteúdo da newsletter {type}.
            </p>
            <p className="text-gray-500">
              Aqui você encontrará {type === 'semanal' ? 'atualizações semanais' : 'resumos mensais'} sobre 
              moda sustentável, brechós em Curitiba e muito mais!
            </p>
          </div>
          
          <Link 
            to="/" 
            className="btn-primary inline-block"
          >
            Voltar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;