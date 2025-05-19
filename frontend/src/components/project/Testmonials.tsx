"use client";

import React from "react";

interface Testimonial {
  name: string;
  message: string;
}

interface TestimonialsFormProps {
  testimonials: Testimonial[];
  onChange: (updatedTestimonials: Testimonial[]) => void;
  onComplete: () => void;
}

const TestimonialsForm: React.FC<TestimonialsFormProps> = ({
  testimonials,
  onChange,
  onComplete,
}) => {
  const handleChange = (
    index: number,
    field: keyof Testimonial,
    value: string
  ) => {
    const updated = [...testimonials];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const addTestimonial = () => {
    onChange([...testimonials, { name: "", message: "" }]);
  };

  const removeTestimonial = (index: number) => {
    const updated = testimonials.filter((_, i) => i !== index);
    onChange(updated);
  };

  return (
    <div className="bg-teal-50 p-6 rounded-xl border border-teal-300 shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-teal-700 border-b border-teal-300 pb-2">
        5. Testimonials
      </h2>

      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-lg border border-teal-200 my-4"
        >
          <div className="mb-3">
            <label className="block text-teal-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              value={testimonial.name}
              onChange={(e) => handleChange(index, "name", e.target.value)}
              className="w-full border border-teal-300 rounded-md px-3 py-2"
              placeholder="Name of the person giving the testimonial"
            />
          </div>
          <div>
            <label className="block text-teal-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              value={testimonial.message}
              onChange={(e) => handleChange(index, "message", e.target.value)}
              className="w-full border border-teal-300 rounded-md px-3 py-2"
              placeholder="Their message or feedback"
              rows={4}
            />
          </div>
          <button
            onClick={() => removeTestimonial(index)}
            className="text-red-600 mt-2 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="flex gap-4">
        <button
          onClick={addTestimonial}
          className="mt-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          + Add Testimonial
        </button>
        <button
          onClick={onComplete}
          className="mt-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-2 rounded-md"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
};

export default TestimonialsForm;
