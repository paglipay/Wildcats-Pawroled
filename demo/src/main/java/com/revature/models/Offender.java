package com.revature.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="offenders")
@JsonIdentityInfo( // This helps with he serialization to stop recursion with hibernate joins
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "id")
public class Offender {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="offender_id", unique=true)
	private int id;
//	
//
//	private Deputy deputy;
	
	
	@Column(name="name", unique=false, nullable=false)
	private String name;
	
	@Column(name="weight")
	private int weight;
	
	@Column(name="breed")
	private String breed;
	
	
	@Column(name="totalVotes")
	private int totalVotes;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getWeight() {
		return weight;
	}


	public void setWeight(int weight) {
		this.weight = weight;
	}


	public String getBreed() {
		return breed;
	}


	public void setBreed(String breed) {
		this.breed = breed;
	}


	public int getTotalVotes() {
		return totalVotes;
	}


	public void setTotalVotes(int totalVotes) {
		this.totalVotes = totalVotes;
	}

	public Offender() {}

	public Offender(int id, String name, int weight, String breed, int totalVotes) {
		super();
		this.id = id;
		this.name = name;
		this.weight = weight;
		this.breed = breed;
		this.totalVotes = totalVotes;
	}


	@Override
	public int hashCode() {
		return Objects.hash(breed, id, name, totalVotes, weight);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Offender other = (Offender) obj;
		return Objects.equals(breed, other.breed) && id == other.id && Objects.equals(name, other.name)
				&& totalVotes == other.totalVotes && weight == other.weight;
	}


	@Override
	public String toString() {
		return "Offender [id=" + id + ", name=" + name + ", weight=" + weight + ", breed=" + breed + ", totalVotes="
				+ totalVotes + "]";
	}
	
	
	
	
	
	

}


