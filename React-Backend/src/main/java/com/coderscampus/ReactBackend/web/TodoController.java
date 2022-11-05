package com.coderscampus.ReactBackend.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.coderscampus.ReactBackend.domain.TodoItem;
import com.coderscampus.ReactBackend.repository.TodoRepository;

@RestController
@RequestMapping("/api/todoItems")
public class TodoController {
	
	@Autowired
	private TodoRepository todoRepo;

	@GetMapping
	public ResponseEntity<List<TodoItem>> getAllTodoItems(){
		List<TodoItem> allTodoItems = null;
		try {
			allTodoItems = todoRepo.findAll();
		} catch (Exception e) {
			return ResponseEntity.status(500).build();
		}
		return ResponseEntity.ok(allTodoItems);
	}
	
	@GetMapping("/active")
	public ResponseEntity<List<TodoItem>> getActiveTodoItems(){
		List<TodoItem> allActiveTodoItems = null;
		try {
			allActiveTodoItems = todoRepo.findByIsDone(false);
		} catch (Exception e) {
			return ResponseEntity.status(500).build();
		}
		return ResponseEntity.ok(allActiveTodoItems);
	}
	
	@PostMapping
	public ResponseEntity<List<TodoItem>> addNewTodoItem(@RequestBody TodoItem todoItem){
		todoRepo.save(todoItem);
		return getAllTodoItems();
	}
	
	@PutMapping
	public ResponseEntity<?> updateTodoItem(@RequestBody TodoItem todoItem){
		todoRepo.save(todoItem);
		return getAllTodoItems();
	}
	
	/*@RequestMapping(method = {RequestMethod.POST, RequestMethod.PUT})
	public ResponseEntity<todoItem> updateTodoItem(@RequestBody TodoItem todoItem){
		todoRepo.save(todoItem);
		return getAllTodoItems();
		
		*Post ile put burada ayni seyi yaptigi icin tek bir mthod da birlestirebiliyoruz
		
	}*/
	@DeleteMapping
	public ResponseEntity<?> deleteTodoItem(@RequestBody TodoItem todoItem){
		// todoRepo.delete(todoItem);
		todoRepo.deleteById(todoItem.getId());
		return getAllTodoItems();
	}
	
}
