# Enum con los tipos de clases colectivas.
# Se usa para que el usuario elija por numero y no escriba texto a mano.

from enum import Enum


class TipoClase(Enum):
    YOGA = 1
    PILATES = 2
    ZUMBA = 3
    SPINNING = 4