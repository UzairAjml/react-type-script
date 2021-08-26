import { useState, useEffect } from 'react';
import { FState as Props } from '../App';

interface FProps {
  friends: Props['friends'];
  setFriends: React.Dispatch<React.SetStateAction<Props['friends']>>;
  inputFriends: any;
}
const AddToList: React.FC<FProps> = ({ friends, setFriends, inputFriends }) => {
  const [input, setInput] = useState({
    id: '',
    name: '',
    age: '',
    url: '',
    team: '',
  });
  useEffect(() => {
    setInput(inputFriends);
  }, [inputFriends]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const validate = (): Boolean => {
    if (
      input.name === '' ||
      input.age === '' ||
      input.url === '' ||
      input.team === ''
    ) {
      alert('Please fill in complete and accurate data');
      return false;
    }

    return true;
  };
  const handleClick = (): void => {
    if (validate()) {
      if (input.id) {
        const getIndex = friends.findIndex(
          (item) => item.id === parseInt(input.id)
        );
        const friendsObj = {
          id: parseInt(input.id),
          name: input.name,
          age: parseInt(input.age),
          url: input.url,
          team: input.team,
        };
        friends[getIndex] = friendsObj;
        const arrayFriends = [...friends];
        setFriends(arrayFriends);
        setInput({
          id: '',
          name: '',
          age: '',
          url: '',
          team: '',
        });
      } else {
        let rand = Math.floor(Math.random() * 1000);
        setFriends([
          ...friends,
          {
            id: rand,
            name: input.name,
            age: parseInt(input.age),
            url: input.url,
            team: input.team,
          },
        ]);

        setInput({
          id: '',
          name: '',
          age: '',
          url: '',
          team: '',
        });
      }
    }
  };

  return (
    <div className='AddToList'>
      <input
        id='name'
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='name'
        value={input.name}
        placeholder='Name'
      />
      <input
        id='age'
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='age'
        value={input.age}
        placeholder='Age'
      />
      <input
        id='url'
        type='text'
        onChange={handleChange}
        className='AddToList-input'
        name='url'
        value={input.url}
        placeholder='Image Url'
      />
      <input
        id='team'
        onChange={handleChange}
        className='AddToList-input'
        name='team'
        value={input.team}
        placeholder='Team'
      />
      <button onClick={handleClick} className='AddToList-btn'>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
