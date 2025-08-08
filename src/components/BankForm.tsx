import React, { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';

export  function BankForm() {
  const [step, setStep] = useState(1);
  const { control, handleSubmit, watch, trigger, setValue, formState: { errors, isValid } } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '', email: '', phone: '', collateralTypes: [], details: ''
    }
  });

  const data = watch();
  const onSubmit = useCallback((values) => {
    // TODO: integrate API call
    console.log('Enquiry Data:', values);
    alert('Enquiry submitted! We will contact you soon.');
  }, []);

  const nextStep = async () => {
    let valid = false;
    if (step === 1) valid = await trigger(['name','email','phone']);
    if (step === 2) valid = await trigger(['collateralTypes','details']);
    if (valid) setStep(prev => prev + 1);
  };
  const prevStep = () => setStep(prev => prev - 1);

  const collateralOptions = [
    'Cheques & Security Stationery',
    'Passbooks & Account Docs',
    'Letterheads & Envelopes',
    'Forms & Application Kits'
  ];

  const templates = [
    { label: 'Need Cheques', types: ['Cheques & Security Stationery'] },
    { label: 'Passbook Reprint', types: ['Passbooks & Account Docs'] },
    { label: 'Custom Letterhead', types: ['Letterheads & Envelopes'] }
  ];

  const applyTemplate = (types) => {
    setValue('collateralTypes', types);
    setStep(3);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6">Banking Collateral Enquiry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {step === 1 && (
          <div>
            {/* Step 1: Contact Info */}
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required.' }}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block mb-1">Name</label>
                  <input {...field} className="w-full border p-2 rounded" />
                  {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
                </div>
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required.',
                pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email.' }
              }}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block mb-1">Email</label>
                  <input type="email" {...field} className="w-full border p-2 rounded" />
                  {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
                </div>
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{ required: 'Phone is required.', minLength: { value: 10, message: 'Must be at least 10 digits.' } }}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block mb-1">Phone</label>
                  <input {...field} className="w-full border p-2 rounded" />
                  {errors.phone && <p className="text-red-500 mt-1">{errors.phone.message}</p>}
                </div>
              )}
            />
          </div>
        )}

        {step === 2 && (
          <div>
            {/* Quick Reply Templates */}
            <div className="mb-4">
              <p className="mb-2 font-medium">Or use a Quick Template:</p>
              <div className="flex flex-wrap gap-2">
                {templates.map(t => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => applyTemplate(t.types)}
                    className="px-3 py-1 bg-gray-200 rounded"
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Collateral Selection & Details */}
            <label className="block mb-2 font-medium">Select Collateral Types</label>
            <Controller
              name="collateralTypes"
              control={control}
              rules={{ validate: v => v.length > 0 || 'Select at least one type.' }}
              render={({ field }) => (
                <div className="mb-4">
                  {collateralOptions.map(option => (
                    <div key={option} className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        value={option}
                        checked={field.value.includes(option)}
                        onChange={e => {
                          const checked = e.target.checked;
                          const newValues = checked
                            ? [...field.value, option]
                            : field.value.filter(val => val !== option);
                          field.onChange(newValues);
                        }}
                        className="mr-2"
                      />
                      <span>{option}</span>
                    </div>
                  ))}
                  {errors.collateralTypes && <p className="text-red-500 mt-1">{errors.collateralTypes.message}</p>}
                </div>
              )}
            />
            <Controller
              name="details"
              control={control}
              rules={{ required: 'Details are required.' }}
              render={({ field }) => (
                <div className="mb-4">
                  <label className="block mb-1">Additional Details</label>
                  <textarea {...field} className="w-full border p-2 rounded" rows={4} placeholder="Quantities, timelines, special requirements" />
                  {errors.details && <p className="text-red-500 mt-1">{errors.details.message}</p>}
                </div>
              )}
            />
          </div>
        )}

        {step === 3 && (
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-4">Review Your Enquiry</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Name:</strong> {data.name}</li>
              <li><strong>Email:</strong> {data.email}</li>
              <li><strong>Phone:</strong> {data.phone}</li>
              <li><strong>Types:</strong> {data.collateralTypes.join(', ')}</li>
              <li><strong>Details:</strong> {data.details}</li>
            </ul>
          </div>
        )}

        <div className="flex justify-between">
          {step > 1 && <button type="button" onClick={prevStep} className="px-4 py-2 bg-gray-200 rounded">Back</button>}
          {step < 3
            ? <button type="button" onClick={nextStep} className="ml-auto px-4 py-2 bg-orange-500 text-white rounded">Next</button>
            : <button type="submit" className="ml-auto px-4 py-2 bg-green-600 text-white rounded">Submit</button>
          }
        </div>
      </form>
    </div>
  );
}