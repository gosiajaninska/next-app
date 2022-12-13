interface InputProps {
  id: string,
  label?: string,
  placeholder?: string,
  autocomplete: string,
  type: string,
  inputAttributes: any,
  errorMessage?: string,
}

export const Input = ({id, label, placeholder, autocomplete, type, inputAttributes, errorMessage}: InputProps) => {
  return (
    <>
      {label &&
        <label
          htmlFor={id}
          className="block mb-2 text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      }
      <input
        id={id}
        type={type}
        autoComplete={autocomplete}
        {...inputAttributes}
        placeholder={placeholder}
        className="w-full border-slate-200 rounded-xs sm:text-sm"
      />
      <p>{errorMessage}</p>
    </>
  );
}