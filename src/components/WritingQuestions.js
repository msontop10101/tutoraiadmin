import React, { useState } from 'react';
import whitecircle from '../assets/images/whitecircle.png';

const WritingQuestions = () => {
  const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);
  const [answers, setAnswers] = useState([]);
  const [newOption, setNewOption] = useState('');
  const [newAnswer, setNewAnswer] = useState('');
  const [isOptionFormVisible, setIsOptionFormVisible] = useState(false);
  const [isAnswerFormVisible, setIsAnswerFormVisible] = useState(false);

  const handleInputOption = (e) => {
    setNewOption(e.target.value);
  };

  const handleInputAnswer = (e) => {
    setNewAnswer(e.target.value);
  };

  const handleSubmitOption = (e) => {
    e.preventDefault();
    if (newOption.trim() !== '') {
      setOptions([...options, newOption]);
      setNewOption('');
      setIsOptionFormVisible(false);
    }
  };

  const handleSubmitAnswer = (e) => {
    e.preventDefault();
    if (newAnswer.trim() !== '') {
      setAnswers([...answers, newAnswer]);
      setNewAnswer('');
      setIsAnswerFormVisible(false);
    }
  };

  return (
    <>
      <div className='w-full flex'>
        <div className=''>
          <img src={whitecircle} alt='white circle' />
        </div>
        <div className='bg-white mx-5 w-full rounded-md p-8'>
          <div className='flex flex-col gap-y-5 font-bold text-2xl'>
            <div className='flex items-center gap-x-2'>
              <p>English Level: </p>
              <div className=''>
                <select className='border border-black p-[1px] rounded-md'>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                </select>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <p>Questions: </p>
              <input
                type="text"
                id="remail"
                name="remail"
                required
                className='rounded-lg border border-[black] h-[53px]'
              />
            </div>
            <div className='flex items-center gap-x-2'>
              <p>Option: </p>
              <div className=''>
                <div className='w-full flex gap-x-2 items-center'>
                  <div className='flex gap-x-2 items-center'>
                    {options.map((option, index) => (
                      <div
                        key={index}
                        className='font-normal text-sm border border-[black] rounded-md justify-center items-center p-2'
                      >
                        {option}
                      </div>
                    ))}
                    <p
                      className='font-bold text-sm cursor-pointer'
                      onClick={() => setIsOptionFormVisible(true)}
                    >
                      + add
                    </p>
                  </div>

                  {isOptionFormVisible && (
                    <div className='font-normal text-sm'>
                      <form onSubmit={handleSubmitOption} className='flex gap-x-2'>
                        <input
                          type="text"
                          placeholder="Enter an option"
                          value={newOption}
                          onChange={handleInputOption}
                          className='h-[30px] border border-black p-2 rounded-lg'
                        />
                        <button type="submit" className='underline'>Submit</button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <p>Answer: </p>
              <div className=''>
                <div className='w-full flex gap-x-2 items-center'>
                  <div className='flex gap-x-2 items-center'>
                    {answers.map((answer, index) => (
                      <div
                        key={index}
                        className='font-normal text-sm border border-[black] rounded-md justify-center items-center p-2'
                      >
                        {answer}
                      </div>
                    ))}
                    <p
                      className='font-bold text-sm cursor-pointer'
                      onClick={() => setIsAnswerFormVisible(true)}
                    >
                      + add
                    </p>
                  </div>

                  {isAnswerFormVisible && (
                    <div className='font-normal text-sm'>
                      <form onSubmit={handleSubmitAnswer} className='flex gap-x-2'>
                        <input
                          type="text"
                          placeholder="Enter an answer"
                          value={newAnswer}
                          onChange={handleInputAnswer}
                          className='h-[30px] border border-black p-2 rounded-lg'
                        />
                        <button type="submit" className='underline'>Submit</button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WritingQuestions;
