/**
 * Represents a classroom with a maximum student size.
 */
export default class ClassRoom {
  /**
   * Creates a new ClassRoom instance.
   * @param {number} maxStudentsSize - The maximum size of the classroom.
   */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
