import os 

ARCHIVO = "inventario.txt"


total = {
    "producto": "Portátil"
}
# Carga el inventario 
def carga():
    productos = []
    with open(ARCHIVO, "w") as f:
        f.write("Portatil, 799.99, 5")


opcion = input("Elige una opcion: ")
while True:
    print("\n---- Menu del inventario ----- ")
    print("1. Ver productos. ")
    print("2. Valor total del inventario")
    print("3. Productos agotados. ")
    print("4. Actualizar cantidad")
    print("5. Hasta pronto")
    match opcion:
        case "1":
            
        
        case "2":
            

        case "3": 
            
    
        case "4": 
            
    
        case "5":
            
            break

        case _:
            print("Opcion no valida. ")