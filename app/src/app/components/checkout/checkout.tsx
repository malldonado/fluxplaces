"use client";
import React, { useState } from 'react';

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState<'mercadopago' | 'creditcard'>('creditcard');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [mercadoPagoUsername, setMercadoPagoUsername] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handlePaymentMethodChange = (method: 'mercadopago' | 'creditcard') => {
    setPaymentMethod(method);
    // Reset relevant fields when switching between methods
    if (method === 'mercadopago') {
      setCardNumber('');
      setExpiryDate('');
      setCvv('');
      setNameOnCard('');
    } else if (method === 'creditcard') {
      setMercadoPagoUsername('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-x-hidden bg-gray-100 text-gray-800 p-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium">Forma de Pagamento</h2>
          <div className="bg-white rounded mt-4 shadow-lg">
            <div className="px-8 py-5">
              <div className="flex items-center">
                <input
                  className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 cursor-pointer"
                  type="radio"
                  id="mercadoPago"
                  checked={paymentMethod === 'mercadopago'}
                  onChange={() => handlePaymentMethodChange('mercadopago')}
                />
                <label htmlFor="mercadoPago" className="text-sm font-medium ml-4">Mercado Pago</label>
              </div>
              {paymentMethod === 'mercadopago' && (
                <div className="grid grid-cols-1 gap-4 mt-4 px-8 pb-2">
                  <div>
                    <label className="text-xs font-semibold" htmlFor="mercadoPagoUsername">Usuário do Mercado Pago</label>
                    <input
                      className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                      type="text"
                      id="mercadoPagoUsername"
                      placeholder="Seu usuário no Mercado Pago"
                      value={mercadoPagoUsername}
                      onChange={(e) => setMercadoPagoUsername(e.target.value)}
                    />
                  </div>
                </div>
              )}
            </div>
            <div className="border-t">
              <div className="px-8 py-5">
                <div className="flex items-center">
                  <input
                    className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 cursor-pointer"
                    type="radio"
                    id="creditCard"
                    checked={paymentMethod === 'creditcard'}
                    onChange={() => handlePaymentMethodChange('creditcard')}
                  />
                  <label htmlFor="creditCard" className="text-sm font-medium ml-4">Cartão de Crédito</label>
                </div>
                {paymentMethod === 'creditcard' && (
                  <div className="grid grid-cols-1 gap-4 mt-4 px-8 pb-8">
                    <div>
                      <label className="text-xs font-semibold" htmlFor="cardNumber">Número do Cartão</label>
                      <input
                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                        type="text"
                        id="cardNumber"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold" htmlFor="expiryDate">Data de Expiração</label>
                      <input
                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                        type="text"
                        id="expiryDate"
                        placeholder="MM/AA"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold" htmlFor="cvv">Código de Segurança (CVV)</label>
                      <input
                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                        type="password"
                        id="cvv"
                        placeholder="..."
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold" htmlFor="nameOnCard">Nome no Cartão</label>
                      <input
                        className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                        type="text"
                        id="nameOnCard"
                        placeholder="Nome Completo"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-medium">Resumo da Compra</h2>
          <div className="bg-white rounded mt-4 shadow-lg py-6">
            <div className="px-8">
              {/* Conteúdo do resumo da compra */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
