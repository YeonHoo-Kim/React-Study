import React, { useState } from 'react';

const Register = (props) => {
  const { members, setMembers } = props;
  const [member, setMember] = useState({
    name: '',
    id: '',
    password: '',
    email: '',
  });

  const { name, id, password, email } = member;

  const onChange = (e) => {
    const updMember = { ...member, [e.target.name]: e.target.value };
    setMember(updMember);
  };

  const onFindId = (id) => {
    return !!members.find((member) => member.id === id);
  };

  const onValidCheck = () => {
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
    if (onValidCheck()) {
      setMembers([...members, member]);
    }
  };

  return (
    <>
      <h1 className="register-title">&nbsp; * 회원가입 *</h1>
      <div className="register-content">
        <input
          name="name"
          type="name"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <input
          name="id"
          type="id"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <input
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={email}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>회원가입</button>
      </div>
    </>
  );
};

export default Register;
