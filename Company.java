package com.kiran.model;

public class Company {
	String companyName;
	String loaction;
	Department[] department;
	
	Company() { }

	public Company(String companyName, String loaction, Department[] department) {
		super();
		this.companyName = companyName;
		this.loaction = loaction;
		this.department = department;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getLoaction() {
		return loaction;
	}

	public void setLoaction(String loaction) {
		this.loaction = loaction;
	}

	public Department[] getDepartment() {
		return department;
	}

	public void setDepartment(Department[] department) {
		this.department = department;
	}
	
	
}
