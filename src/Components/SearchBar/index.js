import { TextInput } from "./styles";

export function SearchBar(props) {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholdercolor}
    />
  );
}
