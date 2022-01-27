import { useRef } from "react";

const AddWilderForm = () => {
  const inputRef = useRef<HTMLInputElement>(null!);
  return (
    <form
      onSubmit={async (event) => {
        event.preventDefault();

        console.log(inputRef.current.value);

        const res = await fetch("/api/addWilder", {
          body: JSON.stringify({
            name: inputRef.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const result = await res.json();
      }}
    >
      <label htmlFor="name">Name</label>
      <input
        ref={inputRef}
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default AddWilderForm;
