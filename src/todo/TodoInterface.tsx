export interface TodosType {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface ModalProps {
  setIsClickCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCreate: (title: string, content: string) => void;
  setIsClickModifyModal: React.Dispatch<React.SetStateAction<boolean>>;
  onModify: (title: string, content: string, id: string) => void;
  isClickCreateModal: boolean;
  isClickModifyModal: boolean;
  selectId: string;
}

export interface TodoListProps {
  todos: TodosType[];
  onRemove: (id: string) => void;
  setIsClickModifyModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectId: React.Dispatch<React.SetStateAction<string>>;
}

export interface TodoListItemType {
  id: string;
  todoItem: TodosType;
  onRemove: (id: string) => void;
  setIsClickModifyModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectId: React.Dispatch<React.SetStateAction<string>>;
}
