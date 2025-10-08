import { MessageCircle, AlertTriangle, MapPin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function ActivationPage() {
  const { user, profile, signOut } = useAuth();
  const whatsappNumber = '5531983218279';
  const message = 'Olá quero fazer a liberação do meu aplicativo de rastreio veicular';

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`;
    } else {
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"
        style={{ filter: 'blur(8px)', transform: 'scale(1.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          <div className="text-center opacity-30">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Proteja Seu Veículo com Rastreamento em Tempo Real
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Tenha total controle e segurança do seu veículo.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <MapPin className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">RastreioVeicular</span>
            </div>
            <button
              onClick={signOut}
              className="text-gray-600 hover:text-blue-600 transition font-medium"
            >
              Sair
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-30 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-4 border-blue-600">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Liberação do Aplicativo
              </h2>
              <p className="text-lg text-gray-600">
                Olá <span className="font-bold text-blue-600">{profile?.full_name || user?.email}</span>
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 mb-8 border-2 border-blue-200">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">R$</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Promoção Especial: R$ 1,00
                  </h3>
                  <p className="text-blue-700 font-medium">
                    7 dias de acesso completo ao aplicativo
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Atenção Importante</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Estamos enfrentando dificuldades técnicas temporárias para processar pagamentos dos seguintes bancos:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700 mb-3">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Nubank
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Caixa Econômica Federal
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                      Itaú
                    </li>
                  </ul>
                  <p className="text-gray-700 text-sm font-medium">
                    Para garantir sua ativação imediata, entre em contato com nosso suporte pelo WhatsApp.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h4 className="font-bold text-gray-900 text-center">
                Como funciona a liberação:
              </h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <p className="ml-3 text-gray-700">
                    Clique no botão abaixo para abrir o WhatsApp
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <p className="ml-3 text-gray-700">
                    Envie a mensagem automática para nosso suporte
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <p className="ml-3 text-gray-700">
                    Nossa equipe fará a liberação e enviará as instruções
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-5 rounded-xl hover:from-green-600 hover:to-green-700 transition font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center group"
            >
              <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Falar com Suporte no WhatsApp
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-3">
                Suporte disponível: Segunda a Sábado, 8h às 20h
              </p>
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg py-3 px-4 inline-block">
                <p className="text-xs text-gray-600 mb-1">Número do WhatsApp:</p>
                <p className="text-lg font-bold text-blue-600">
                  +55 (31) 98321-8279
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Precisa de ajuda?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Central de Ajuda
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}