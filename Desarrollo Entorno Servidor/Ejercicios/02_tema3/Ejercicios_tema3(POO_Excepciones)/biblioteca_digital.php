<?php

// ==================== CLASE LIBRO ====================
class Libro {
    // Atributos privados (encapsulamiento)
    private $titulo;
    private $autor;
    private $paginas;
    
    /**
     * Constructor de la clase Libro
     * @param string $titulo Título del libro
     * @param string $autor Autor del libro
     * @param int $paginas Número de páginas (debe ser positivo)
     */
    public function __construct($titulo, $autor, $paginas) {
        // Validación básica
        if ($paginas <= 0) {
            throw new Exception("El número de páginas debe ser positivo");
        }
        
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->paginas = $paginas;
    }
    
    /**
     * Obtiene información formateada del libro
     * @return string Información del libro
     */
    public function getInfo() {
        return "Título: " . $this->titulo . 
               ", Autor: " . $this->autor . 
               ", Páginas: " . $this->paginas;
    }
    
    // Getters (para posible extensión)
    public function getTitulo() {
        return $this->titulo;
    }
    
    public function getAutor() {
        return $this->autor;
    }
    
    public function getPaginas() {
        return $this->paginas;
    }
}

// ==================== CLASE BIBLIOTECA ====================
class Biblioteca {
    // Atributo privado: array de libros
    private $libros = [];
    
    /**
     * Constructor de la clase Biblioteca
     */
    public function __construct() {
        $this->libros = [];
        echo "<h2>Biblioteca creada</h2>\n";
    }
    
    /**
     * Agrega un libro a la biblioteca
     * @param Libro $libro Objeto Libro a agregar
     */
    public function agregarLibro(Libro $libro) {
        // Verificar si ya existe (mismo título y autor)
        foreach ($this->libros as $libroExistente) {
            if ($libroExistente->getTitulo() === $libro->getTitulo() && 
                $libroExistente->getAutor() === $libro->getAutor()) {
                echo "<p style='color: orange;'>Advertencia: El libro '" . 
                     $libro->getTitulo() . "' ya existe en la biblioteca.</p>\n";
                return;
            }
        }
        
        // Agregar el libro al array
        $this->libros[] = $libro;
        echo "<p style='color: green;'>✓ Libro agregado: " . 
             $libro->getInfo() . "</p>\n";
    }
    
    /**
     * Lista todos los libros en la biblioteca
     */
    public function listarLibros() {
        echo "<hr>\n<h3> Catálogo de la Biblioteca</h3>\n";
        
        if (empty($this->libros)) {
            echo "<p>La biblioteca está vacía.</p>\n";
        } else {
            echo "<ul>\n";
            foreach ($this->libros as $indice => $libro) {
                echo "  <li><strong>Libro #" . ($indice + 1) . ":</strong> " . 
                     $libro->getInfo() . "</li>\n";
            }
            echo "</ul>\n";
        }
    }
    
    /**
     * Cuenta el total de libros en la biblioteca
     * @return int Número total de libros
     */
    public function contarLibros() {
        return count($this->libros);
    }
    
    /**
     * Muestra estadísticas de la biblioteca
     */
    public function mostrarEstadisticas() {
        echo "<hr>\n<h3> Estadísticas de la Biblioteca</h3>\n";
        echo "<p>Total de libros: <strong>" . $this->contarLibros() . "</strong></p>\n";
        
        if (!empty($this->libros)) {
            $totalPaginas = 0;
            foreach ($this->libros as $libro) {
                $totalPaginas += $libro->getPaginas();
            }
            echo "<p>Total de páginas: <strong>" . $totalPaginas . "</strong></p>\n";
            echo "<p>Promedio de páginas por libro: <strong>" . 
                 round($totalPaginas / $this->contarLibros(), 1) . "</strong></p>\n";
        }
    }
}

// ==================== PROGRAMA PRINCIPAL ====================
echo "<!DOCTYPE html>\n";
echo "<html lang='es'>\n";
echo "<head>\n";
echo "    <meta charset='UTF-8'>\n";
echo "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n";
echo "    <title>Sistema de Biblioteca Digital</title>\n";
echo "    <style>\n";
echo "        body { font-family: Arial, sans-serif; margin: 20px; }\n";
echo "        h1 { color: #2c3e50; }\n";
echo "        h2 { color: #3498db; }\n";
echo "        h3 { color: #2980b9; }\n";
echo "        .container { max-width: 800px; margin: 0 auto; }\n";
echo "        hr { border: 1px solid #ecf0f1; margin: 20px 0; }\n";
echo "    </style>\n";
echo "</head>\n";
echo "<body>\n";
echo "<div class='container'>\n";
echo "<h1>📖 Sistema de Gestión de Biblioteca Digital</h1>\n";

try {
    // ===== FASE 1: CREACIÓN DE LIBROS =====
    echo "<h2>Fase 1: Creación de Libros</h2>\n";
    
    // Crear 3 libros de ejemplo
    $libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 432);
    echo "<p>Libro 1 creado: " . $libro1->getInfo() . "</p>\n";
    
    $libro2 = new Libro("El principito", "Antoine de Saint-Exupéry", 96);
    echo "<p>Libro 2 creado: " . $libro2->getInfo() . "</p>\n";
    
    $libro3 = new Libro("1984", "George Orwell", 328);
    echo "<p>Libro 3 creado: " . $libro3->getInfo() . "</p>\n";
    
    // ===== FASE 2: CREACIÓN Y GESTIÓN DE BIBLIOTECA =====
    echo "<h2>Fase 2: Gestión de Biblioteca</h2>\n";
    
    // Crear biblioteca
    $miBiblioteca = new Biblioteca();
    
    // Agregar libros a la biblioteca
    echo "<h3>Agregando libros a la biblioteca...</h3>\n";
    $miBiblioteca->agregarLibro($libro1);
    $miBiblioteca->agregarLibro($libro2);
    $miBiblioteca->agregarLibro($libro3);
    
    // Intentar agregar un libro duplicado (para demostración)
    $libro4 = new Libro("1984", "George Orwell", 328);
    echo "<p style='color: blue;'>Intentando agregar libro duplicado...</p>\n";
    $miBiblioteca->agregarLibro($libro4);
    
    // ===== FASE 3: CONSULTAS Y REPORTES =====
    echo "<h2>Fase 3: Consultas y Reportes</h2>\n";
    
    // Listar todos los libros
    $miBiblioteca->listarLibros();
    
    // Mostrar estadísticas
    $miBiblioteca->mostrarEstadisticas();
    
    // ===== FASE 4: RESUMEN FINAL =====
    echo "<hr>\n<h2>Resumen del Sistema</h2>\n";
    echo "<p><strong>Objetivos cumplidos:</strong></p>\n";
    echo "<ol>\n";
    echo "  <li>Clase Libro implementada con atributos y métodos</li>\n";
    echo "  <li>Clase Biblioteca implementada para gestión de colecciones</li>\n";
    echo "  <li>Sistema de agregación y validación de libros</li>\n";
    echo "  <li>Generación de reportes y estadísticas</li>\n";
    echo "  <li>Manejo básico de duplicados</li>\n";
    echo "</ol>\n";
    
} catch (Exception $e) {
    echo "<p style='color: red;'><strong>Error:</strong> " . $e->getMessage() . "</p>\n";
}

echo "</div>\n";
echo "</body>\n";
echo "</html>\n";
?>