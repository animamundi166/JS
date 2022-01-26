import './Dropdown.scss';

const OptionTag = (props) => {
  const option = document.createElement('option');
  option.innerText = props.continent;
  option.value = props.continent;
  return option;
};

const SelectTag = (props) => {
  const select = document.createElement('select');
  const optionElements = props.options.map(OptionTag);

  select.append(...optionElements);
  return select;
};

export default SelectTag;
