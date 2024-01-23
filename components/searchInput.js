const SearchInput = ({ value, onChange, className }) => {
  return (
    <input
      className={className}
      type="text"
      value={value}
      placeholder="Type Something ..."
      onChange={onChange}
    />
  );
};

export default SearchInput;
