import { QuestaoDTO } from './questao.dto';

export interface NewQuestionarioDTO {
    idProfessor: number,
    questoes: QuestaoDTO[]
}