import React, { useState } from "react";
import {
  CommentContainer,
  CommentInput,
  CommentP,
  CommentButtons,
  CommentButton,
} from "./commentStyles";
import { getCookie } from "../../cookies/cookies";
import base64 from "base-64";

function Comment({ comment, onEdit, onDelete, nickname }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(comment);

  // 토큰 디코딩
  const token = getCookie("token");
  // 토큰이 없는 경우(로그인 안 한 경우)
  if (!token) {
    return;
  }
  let payload = token.substring(token.indexOf(".") + 1, token.lastIndexOf("."));
  let dec = JSON.parse(base64.decode(payload));

  // -----------------------------------------------------------------------------

  // input 태그 관리
  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    onEdit(editedComment);
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    setEditedComment(comment);
    setIsEditMode(false);
  };
  // -----------------------------------------------------------------------------

  return (
    <CommentContainer>
      {dec.nickname === nickname ? ( // dec.nickname과 nickname을 비교하여 같을 경우
        isEditMode ? (
          <>
            <CommentInput
              type="text"
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
            <CommentButtons>
              <CommentButton onClick={handleSaveClick}>저장</CommentButton>
              <CommentButton onClick={handleCancelClick}>취소</CommentButton>
            </CommentButtons>
          </>
        ) : (
          <>
            <CommentP>댓글: {comment}</CommentP>
            <CommentButtons>
              <CommentButton onClick={handleEditClick}>수정</CommentButton>
              <CommentButton onClick={onDelete}>삭제</CommentButton>
            </CommentButtons>
          </>
        )
      ) : (
        // dec.nickname과 nickname이 다를 경우
        <>
          <CommentP>댓글: {comment}</CommentP>
          <CommentButtons>{/* 아무 버튼도 출력하지 않음 */}</CommentButtons>
        </>
      )}
    </CommentContainer>
  );
}

export default Comment;
