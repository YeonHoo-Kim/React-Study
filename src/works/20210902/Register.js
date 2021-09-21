import React, { useRef } from 'react';

const Register = (props) => {
  const { members, setMembers } = props;

  const nameRef = useRef('');
  const idRef = useRef('');
  const passwordRef = useRef('');
  const emailRef = useRef('');

  // ref가 참조하는 요소의 value 주소 가리키기
  // 코드를 읽을 때는 ref가 참조하는 요소가 무엇인지 모르기에 undefined warning 발생함!
  // const name = nameRef.current.value;
  // const email = emailRef.current.value;
  // const id = idRef.current.value;
  // const password = passwordRef.current.value;

  // const onChange = (e) => {
  //   const updMember = { ...member, [e.target.name]: e.target.value };
  //   setMember(updMember);
  // };

  const onFindId = (id) => {
    return !!members.find((member) => member.id === id);
  };

  const onValidCheck = () => {
    // const name = nameRef.current.value;
    const email = emailRef.current.value;
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    // 이메일 정규식
    const reg_email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // 비밀번호 정규식 (영문,숫자 혼합 6~20)
    const reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    if (!reg_email.test(email)) {
      alert('이메일 형식이 유효하지 않습니다.');
      return false;
    } else if (onFindId(id)) {
      alert('이미 존재하는 아이디 입니다.');
      return false;
    } else if (!reg_pwd.test(password)) {
      alert('비밀번호는 영문,숫자를 혼합하여 6~20자 이내로 작성해주세요.');
      return false;
    }
    return true;
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  const onClick = () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const id = idRef.current.value;
    const password = passwordRef.current.value;

    console.log(
      //`name: ${name.current.value}, id: ${id.current.value}, passsword: ${password.current.value}, email: ${email.current.value}`,
      `name: ${name}, id: ${id}, passsword: ${password}, email: ${email}`,
    );
    if (onValidCheck()) {
      setMembers([
        ...members,
        { name: name, id: id, password: password, email: email },
      ]);
    }
  };

  const onReset = () => {
    nameRef.current.value = '';
    idRef.current.value = '';
    passwordRef.current.value = '';
    emailRef.current.value = '';

    // id 입력부분에 자동 포커싱
    idRef.current.focus();
  };

  return (
    <>
      <h1 className="register-title">&nbsp; * 회원가입 *</h1>
      <div className="register-content">
        <input
          name="name"
          type="name"
          placeholder="이름을 입력해주세요"
          // value={name}
          // onChange={onChange}
          ref={nameRef}
          onKeyPress={onKeyPress}
        />
        <input
          name="id"
          type="id"
          placeholder="아이디를 입력해주세요"
          // value={id}
          // onChange={onChange}
          ref={idRef}
          onKeyPress={onKeyPress}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          // value={password}
          // onChange={onChange}
          ref={passwordRef}
          onKeyPress={onKeyPress}
        />
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          // value={email}
          // onChange={onChange}
          ref={emailRef}
          onKeyPress={onKeyPress}
        />
      </div>
      <div className="button-area">
        <button onClick={onClick}>회원가입</button>
        <button onClick={onReset}>초기화</button>
      </div>
    </>
  );
};

export default Register;
