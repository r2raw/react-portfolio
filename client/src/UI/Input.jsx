function Input({ children, name, textArea, ...props }) {
  const cssClass =
    "peer text-xl px-4 py-2 bg-transparent w-full border-b border-sky-600  focus:outline-none focus:border";
  let content = (
    <input
      className={cssClass}
      placeholder=" "
      name={name}
      id={name}
      {...props}
    />
  );

  if (textArea) {
    content = <textarea className={cssClass} name={name} id={name} placeholder=" " {...props} />;
  }
  return (
    <div className="relative" id="input-group">
      {content}
      <label
        className={`absolute  top-1/2 -translate-y-[210%] text-sm left-4 peer-placeholder-shown:text-md peer-placeholder-shown:-translate-y-1/2 transition-all duration-500 ease-in not text-gray-500 pointer-events-none`}
        id="input-label"
      >
        {children}
      </label>
    </div>
  );
}

export default Input;
