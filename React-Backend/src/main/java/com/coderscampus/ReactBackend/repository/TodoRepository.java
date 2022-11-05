package com.coderscampus.ReactBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coderscampus.ReactBackend.domain.TodoItem;

public interface TodoRepository extends JpaRepository<TodoItem, Long> {
	
	// select * from todo_item where is_done = ?
	List<TodoItem> findByIsDone(Boolean isDone);

}
