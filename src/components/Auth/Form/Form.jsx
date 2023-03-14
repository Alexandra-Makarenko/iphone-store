import { useState } from "react";
import { Input,InputGroup,InputRightElement,Button } from '@chakra-ui/react'

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(false)

  const handlePassClick = () => setShow(!show)
  
  return (
      <div>
          <Input type='email'
              pr='4.5rem'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder = 'email'
          />
          <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
                  placeholder='Enter password'
                  value={pass}
              onChange={(e) => setPass(e.target.value)}
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handlePassClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
          </InputGroup>
          <Button
              onClick={()=>handleClick(email,pass)}
          >
              {title}
          </Button>
    </div>
  );
};

export {Form};