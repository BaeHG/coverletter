import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  // 예시 데이터 (10개의 항목)
  const data = [
    <h1 className="data-name">"좋아하는 것: MMA"</h1>,
    <h1 className="data-name">"싫어하는 것: 술"</h1>, 
    <h1 className="data-name">"애정하는 것: <span>강태진</span> 그리고... <span>코딩</span>"</h1>
  ];
  const itemsPerPage = 1; // 한 페이지에 보여줄 데이터 수

  // 페이지에 표시할 데이터 계산
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentPageData = data.slice(startIndex, startIndex + itemsPerPage);

  // 페이지 변경 함수
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="App">
      <h1 className="app-title">배호근의 자기소개</h1>
      <button onClick={() => setIsModalOpen(true)}>자세히 보기</button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>나의 소개이다</h2>
            <ul>
              {currentPageData.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="pagination">
              <button onClick={handlePrevPage} disabled={currentPage === 1} className="btn-primary" translate="no">
                PREVIOUS
              </button>
              <button
                translate="no"
                onClick={handleNextPage}
                disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
                className="btn-primary"
              >
                NEXT
              </button>
            </div>
            <button onClick={() => setIsModalOpen(false)} className="btn-close" translate="no">CLOSE</button>
          </div>
        </div>
      )}
    </div>
  );
};


export default App;
