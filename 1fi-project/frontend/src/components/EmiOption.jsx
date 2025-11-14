import React from 'react';

export default function EmiOption({ plan, isSelected, onSelect }) {
  
  const formattedCashback = plan.cashback > 0 
    ? `Additional cashback of ₹${plan.cashback.toLocaleString('en-IN')}` 
    : '';

  return (
    <div
      onClick={onSelect}
      className={`
        border rounded-lg p-4 cursor-pointer transition-all
        ${isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-white hover:border-gray-400'}
      `}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-bold text-gray-900">
            ₹{plan.monthlyPayment.toLocaleString('en-IN')}
          </span>
          <span className="text-gray-600">x {plan.tenure} months</span>
        </div>
        <span className={`font-semibold ${plan.interest === 0 ? 'text-green-600' : 'text-yellow-700'}`}>
          {plan.interest}% interest
        </span>
      </div>
      {formattedCashback && (
        <p className="text-sm text-green-700 mt-1">{formattedCashback}</p>
      )}
    </div>
  );
}