function MainButton({ children }) {
  return (
    // with underline button
    <button className="p-2 hover:bg-burgundy-600 text-floral_white-400 transition duration-500 ease-in-out border-b-2 border-burgundy-500 hover:font-bold">
      {children}
    </button>
  );
}

export default MainButton;
