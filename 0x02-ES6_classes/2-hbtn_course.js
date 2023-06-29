export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  //   getter for name
  get name() {
    return this.name;
  }

  //   setter for name
  set name(value) {
    if (typeof value === 'string' || value instanceof String) {
      this._name = name(value);
    } else {
      throw new Error('Name must be a string');
    }
  }

  get length() {
    return this.length;
  }

  set length(value) {
    if (typeof value === 'number' || value instanceof Number) {
      this._length = length(value);
    } else {
      throw new Error('Length must be a number');
    }
  }

  get students() {
    return this.students;
  }

  set students(value) {
    if (
      Array.isArray(value)
      || value.every((item) => typeof item === 'string')
    ) {
      this._students = this.students(value);
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
