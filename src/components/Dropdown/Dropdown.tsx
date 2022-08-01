

type Props = {
  options : {
    value: string,
    label: string,
  }[],
  onChange: () => void
}
import styled from 'styled-components';

const Label = styled.span`
  font-size: 12px;
  width: 22px;
  height: 15px;
  font-weight: 700;
  font-family: "Plus Jakarta Sans";
  line-height: 15px;
  letter-spacing: 0px;
  text-align: left;
`

const styledSelect= styled.select`

`
function Dropdown(DropdownProps: Props) {
  const{options, onChange}= DropdownProps;
  return (
    <>
      <select onChange={onChange}>
        {
        options.map(option => 
          <option value={option.value}>option.label</option>
        )
        }
      </select>
    </>
  )
}

export default Dropdown