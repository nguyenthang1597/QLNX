import styled  from 'styled-components'

const WraperToolBar = styled.div`
    width: auto;
    height: 60px;
    min-height: 60px;
    background-color: #99ddff;
    padding: 15px 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.3);
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
`

// const BaseContainer = styled.div`
//     -webkit-touch-callout: none; 
//     -webkit-user-select: none; 
//     -khtml-user-select: none; 
//     -moz-user-select: none; 
//     -ms-user-select: none; 
//     user-select: none;
//     padding: 10px;
//     height: 100%;
// `

const Button = styled.button`
    width: ${props => props.width || 'auto'}
    height: ${props => props.height || '38px'}
    outline: none;
    border-radius: 5px;
    color: white;
    border: none;
    font-size: 16px;
    background-color: #66ccff;
    cursor: pointer;
    padding: 0 15px;

    :hover {
      background-color: #99ddff;
    }

    i {
      padding: 5px;
      font-size: 14px;
    }
`
const DelButton = styled(Button)`
  background-color: #ff8080;
  :hover {
    background-color: #ff9999;
  }
`

const Modal = styled.div`
    display: none;
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    padding-top: 5%;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    animation-name: fadeIn;
    animation-duration: 0.4s;

    @keyframes fadeIn {
      from {opacity: 0} 
      to {opacity: 1}
    }

    &.active {
      display: block;
    }
`

const ModalContent = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    position: relative;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;
    width: 75%;
    animation-name: slideIn;
    animation-duration: 0.4s;

    @keyframes slideIn {
      from {top: -300px; opacity: 0}
      to {top: 0; opacity: 1}
    }
`

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
    text-align: center;

    td {
        border: 1px solid #ddd;
        padding: 8px;
        font-size: 16px;
    }

    tr:hover {background-color: #ddd;}

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    th {
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: #999966;
        color: white;
        border: 1px solid #ddd;
        padding: 8px;
    }

    input[type=text], select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
    }
`
const CloseButton = styled.span`
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;

    :hover,focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
`
const DivFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`

const DivFlexRow = styled.div`
  display: flex;
`

const Select = styled.select`
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,0.1);
    height: 38px;
    padding: 0 10px;
    font-size: 16px;
    color: gray;
    width: ${props => props.width || '200px'};
    min-width: 100px;
`

const Input = styled.input`
    width: ${props => props.width || 'auto'};
    padding: 8px 20px;
    margin: 8px 0;
`

const ProductContainer = styled.div`
    display: none;
    width: auto;
    height: auto;
    
    &.active {
      display: block;
    }
`

const ButtonChooseFile = styled.label`
    border: 1px solid #ccc;
    border-radius: 3px;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
    margin-top: 10px;
    color: white;
    background: #66ccff;

    :hover {
      background-color: #99ddff;
    }

    input[type="file"] {
        display: none;
    }
`

export {
    WraperToolBar,
    DivFlexRow,
    DivFlexColumn,
    Button,
    DelButton,
    Modal,
    ModalContent,
    Input,
    Table,
    Select,
    CloseButton,
    ProductContainer,
    ButtonChooseFile,
}