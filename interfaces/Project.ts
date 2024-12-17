export interface IProject {
  id: number;
  name: String;
  type: String;
  date: String;
  imgUrl?: String[];
  videoUrl?: String;
  deploy?: String;
  github?: String;
  stack: String[];
  summary: String;
  detail: String;
  frontendTasks: String[];
  backendTasks?: String[];
}
