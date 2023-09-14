// !!! тут и в других файлах no-cycle правило выключено, чтобы
// реализовать public API (feature sliced design)

/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import PaginationButton from "./ui/pagination-button";
import { paginationStep } from "./lib/config";

export { PaginationButton, paginationStep };
