import React, { useEffect, useState } from "react";

//타이머가 끝나기 전에 계속 입력하면 결국 마지막 값을 입력하고 1초 이후에 단 1번 검색된다.
//요청이 들어오고 일정 시간을 기다린 후 요청을 수행하며, 만약 일정 시간 안에 같은 요청이 추가로 들어오면 이전 요청은 취소.
export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
